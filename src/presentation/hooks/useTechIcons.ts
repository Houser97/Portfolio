import { useEffect, useState } from "react"
import { IconType, icons } from "../../assets/constants"

export const useTechIcons = (technologies: string[]) => {
    const [iconsProject, setIconsProject] = useState<IconType[]>([]);

    useEffect(() => {
        setIconsProject(icons.filter(icon => technologies.includes(icon.text)));
    }, [])

    return {
        iconsProject
    }
}