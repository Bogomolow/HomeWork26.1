

export default function ChangeTopic({theme, SetTheme}){
    return(
    <button onClick={() => SetTheme(theme =="light" ? "dark": "light")}>Змінити тему</button>
    )


}