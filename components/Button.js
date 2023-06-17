export default function Button({children, ...par}){
    return(
        <button {...par} >{children}</button>
    )
}