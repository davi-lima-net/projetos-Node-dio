

import { repositoriesPodcast } from "../repositories/podcast-repositorie";

export const serviceListEpisodies = async () => {
    const data = await repositoriesPodcast();
    return data;
};