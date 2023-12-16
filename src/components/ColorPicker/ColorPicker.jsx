export const ColorPicker = ({options}) => {
    return (
        <div>
            <h2>Color Picker</h2>
            {options.map(({label, color})=>(
                <div>
                    <span style={{backgroundColor: color}}>{label}</span>
                </div>
            ))}
        </div>
    )
}