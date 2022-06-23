import Item from './Item';

function List () {
    return (
        <>
            <h1>Minha Lista</h1>
                <ul>
                    <Item marca='Ferrari' ano_lancamento={1985}/>
                    <Item marca ='Lamborghini' ano_lancamento={1976}/>
                    <Item marca ='Mercedes' ano_lancamento={1988}/>
                    <Item />
                </ul>
        </>
    )
}

export default List 