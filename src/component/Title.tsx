import '../asset/css/title.css';

interface Props {
    title?: string
    text1: string
    text2: string
    text3: string
    onClick: () => void
}

export const Title = (props: Props) => {

    return (
        <div className='titleContainer' onClick={props.onClick}>
            <h1 className='title'>{props.title}</h1>
            <div className='road'>
                <p>{props.text1}</p>
                <p>--&gt;</p>
                <p>{props.text2}</p>
                <p>--&gt;</p>
                <p>{props.text3}</p>
            </div>
        </div>
    )
};