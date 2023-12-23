import s from './ColorPicker.module.css';

export const ColorPicker = ({options}) => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Color Picker</h2>
            {options.map(({label, color})=>(
                <div className={s.option} style={{backgroundColor: color}}>
                    <span>{label}</span>
                </div>
            ))}
        </div>
    )
}