import styled from 'styled-components';

export const Container = styled.div`
width: 80%;
margin: auto;

section{
    width: 100%;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: auto;

    .flex{
        display: flex;
        flex-direction: column;


        .produto {   
            text-align: center;
            height: 400px;   
            padding: 16px;
            margin: auto;
            font-family: 'Uncial Antiqua';
            color: #fff;
            font-size: 20px;
    
    
            .img{
                border: 6px solid gray;
                border-radius: 12px;
            }

            h6{
                font-size:30px;
            }
        }

        button{
            width:80%;
            margin: auto;
            box-shadow:inset 0px 1px 3px 0px #91b8b3;
	        background:linear-gradient(to bottom, #000000 5%, #6c7c7c 100%);
	        background-color:#000000;
	        border-radius:5px;
	        border:1px solid #566963;
	        display:inline-block;
	        cursor:pointer;
	        color:#ffffff;
	        font-family:Arial;
	        font-size:15px;
	        font-weight:bold;
	        padding:11px 23px;
	        text-decoration:none;
	        text-shadow:0px -1px 0px #000000;

            button:hover{
                background:linear-gradient(to bottom, #6c7c7c 5%, #000000 100%);
	            background-color:#6c7c7c;
            }
            .myButton:active {
	            position:relative;
	            top:1px;
            }

        }
    }
   
}


`