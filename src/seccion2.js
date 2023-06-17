function MyItem(props){
    const activity =
    props.activity;
    return <li
    className='listlmen'>{activity}</li>;
}

function MyComponent(){
    return(
        <div>
            <h1>
                Bibliografia de:
                Tirone José González Orama
                (Canserbero)
            </h1>
            <ol>
                <MyItem activity='John'/>
                <MyItem activity='David'/>
                <MyItem activity='Marc'/>
            </ol>
        </div>
    );
}

export default MyComponent;
