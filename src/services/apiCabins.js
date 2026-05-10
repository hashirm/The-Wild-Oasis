import supabase, { supabaseUrl } from "./supabase";


export async function getCabins() {
    
    let { data, error } = await supabase.from('cabins').select('*')

    if(error){
        
        throw new Error("Cabins could not be loaded");
    } 

    return data

}

export async function createEditCabin(newCabin, id) {

    console.log(newCabin, id);

    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
    const imageName = `${Date.now()}-${newCabin.image.name}`.replaceAll(/\s/g, "");
  
    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  
    // 1. Create cabin
    let query = await supabase.from('cabins')

      if(!id){query = query.insert([{ ...newCabin, image: imagePath }])
        
      }
      
    // 2. Edit Cabin 
      if(id){
        query = query.update({ ...newCabin, image: imagePath })
        .eq('id', id)
        .select()
      }
      
      const {data, error} = await query.select()
      
     
    if (error) {
      throw new Error("Cabin could not be created");
    }
  
    // 2. Upload image
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    // 3. Rollback if upload fails
    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      console.error(storageError.message);
      throw new Error("Image upload failed, cabin rolled back");
    }
  
    return data;
  }

export async function deleteCabins(id){

    const { error } = await supabase.from('cabins').delete().eq('id', id);
    if(error){
      console.error(error);
      throw new Error("Cabins could not be deleted");
    } 

}