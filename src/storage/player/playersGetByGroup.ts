import { Players } from "@screens/Players";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AsyncStorage } from "react-native";
import { PlayerStorageDTO } from "./PlayerStorageDTO";


export async function playersGetByGroup(group: string) {
    try {
        const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);

        const players:  PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

        return players;
    }catch (error) {
        throw error;
    }
}