import React from "react";


// renders components of as a list passed in the argument
function ListView(props) {
    const list = props.list;

    const card = {
        backgroundColor: "#00000055"
    }

    return (
        <ul>
            {list.map((number) =>
                <li class="text-left p-1 list-unstyled">
                    <div class="p-5 rounded-2" style={card}>
                        {number}
                    </div>
                </li>
            )
            }
        </ul>
    );
}

export default ListView;