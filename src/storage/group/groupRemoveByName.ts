import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { AsyncStorage } from "react-native";
import { groupsGetAll } from "./groupsGetAll";


export async function groupRemoveByName(groupDeleted: string){
    try{
        const storagedGroups = await groupsGetAll();
        const groups = storagedGroups.filter(group => group !== groupDeleted);

        await  AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
    }catch(error){
        throw error;
    }
}