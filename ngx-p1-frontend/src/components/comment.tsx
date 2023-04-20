
interface IComment {
    value: string
    onValueChange: Function
    onEditComplete: Function
    id: number
}
export function Comment(props: IComment) {
    return(
        <>
            <input 
                type="text"
                value={props.value}
                onChange={(e:any) =>{
                    props.onValueChange(e.target.value);
                }}
                onKeyDown={(e:any) => {
                    console.log(e.key)
                    if(e.key === 'Enter') {
                        return props.onEditComplete(props.id,e.target.value)
                    }
                }}
                />
            
        </>
    )
}