
export const textColor = (color) => {
    switch(color){
        case "primary":
            return "#FFFFFF";
        case "secondary":
            return "#000000";
        case "success":
            return "#FFFFFF";
        case "error":
            return "#FFFFFF";
        case "dark":
            return "#FFFFFF";
        case "glass-light":
            return "#000000";
        case "glass-dark":
            return "#FFFFFF";
        case "base":
            return "#000000";
        default:
            return "#FFFFFF";
    }
}

export const buttonBorder = (color) => {
    switch(color){
        case "base":
            return "1px solid #D5D3E2";
        case "glass-light":
            return "1px solid #736D9D80";
        default:
            return "none";
    }
}

export const backGroundColorHandler = (color) =>{
    switch(color){
        case "primary":
            return "#736D9D";
        case "secondary":
            return "#D5D3E2";
        case "success":
            return "#49B77D";
        case "error":
            return "#FF4343";
        case "dark":
            return "#151A25";
        case "glass-light":
            return "rgba(255, 255, 255, 0.81)";
        case "glass-dark":
            return "rgba(21, 26, 37, 0.81)";
        case "base":
            return "#FFFFFF";
        default:
            return "#736D9D";
    }
}