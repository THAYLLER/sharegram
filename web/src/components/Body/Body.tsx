import * as React from "react";
import Box from "../Box/Box";
import Row from "../Row/Row";


import SVG from "../SVG/SVG";

import  "../../../public/css/style.css";

import api from "../../services/api.js";

export default function Body(){
    
    const [feeds, setFeeds] = React.useState([]);
    const [authors, setAuthors] = React.useState([]);

    React.useEffect(() => {

        async function loadFeeds(){

            const response = await api.get('/feeds');

            setFeeds(response.data);
        }

        async function loadHistory(){

            const response = await api.get('/authors');

            setAuthors(response.data);
        }


        loadFeeds();
        loadHistory();
    }, []);

    return(
        <Box>
            <Box 
                line-height = "1"
                marginBottom = "8px"
                display = "inline-block"
                overflow = "hidden"
            >
                <Row
                    minHeight={44}
                    justifyContent="space-between"
                    alignItems="center"
                    height="50px"
                    width = "auto"
                    py="10px"
                    px="20px"
                    flexDirection = "row"
                    overflow-y = "auto hidden"
                    borderBottom="1px solid #DBDBDB"
                >
                    {authors.map(author => (
                        <img key={author._id} className="avatarHistoria" src={author.avatar} />
                    ))}
                </Row>
            
            </Box>
        {feeds.map(feed => (
            <Box 
                key={feed._id}
                width = "100%"
                maxWidth = "600px"
                margin = "40px auto"
                border = "1px solid #efefef"
                backgroundColor = "#fff"
                borderRadius = "2px"
            >    
                <Box
                    display = "flex"
                    alignItems = "center"
                    padding = "14px 20px"
                >
                    <Box
                        width = "30px"
                        height = "30px"
                        marginRight = "10px"
                        border = "1px solid #dbdbdb"
                        borderRadius = "50%"
                    >
                        <img className="avatar" src={feed.author.avatar} />
                    </Box>
                    <Box
                        font-weight = "600"
                        font-size = "15px"
                    >
                        <a href="#">{feed.author.name}</a>
                    </Box>
                    <Box
                        marginLeft = "auto"
                        color = "#000"
                        font-size = "16px"
                    >
                        <a href="#">...</a>
                    </Box>
                </Box>
                <Box>
                    <img className="imgPost" src={feed.image} />
                </Box>
                <Box
                    padding = "14px 24px"
                >
                    <Box 
                        
                        marginBottom = "8px"
                    >
                        <Row
                            minHeight={44}
                            flex = "1"
                            flexDirection = "row"
                            alignItems="center"
                            height="30px"
                            py="5px"
                            px="10px"
                        >
                            <span className="imgLike"></span>
                            <span className="imgComentarios"></span>
                            <SVG type="direct" />
                            <span className="imgSalvar"></span>
                        </Row>
                    </Box>
                    <Box 
                        line-height = "1"
                        marginBottom = "8px"
                        display = "inline-block"
                    >
                        <img className="avatarLike" src="https://avatars3.githubusercontent.com/u/7268910?s=50&v=4" />
                        
                    </Box>
                    <Box 
                        line-height = "1"
                        marginBottom = "8px"
                        display = "inline-block"
                    >
                        Curtido por <span className="text-black">Samueljoaass</span> e <span className="text-black">outras 6 pessoas</span>
                    </Box>
                    <Box
                        display = "flex"
                        border-top = "1px solid #efefef"
                        padding-top = "10px"
                    >
                        <Box
                            margin-right = "8px"
                        >
                            <button className="btLike">
                                <span className="imgLike"></span>
                            </button>
                        </Box>
                        <Box 
                        flex-grow = "1">
                            <Box 
                                width = "100%">
                                    <input className="comentario" placeholder="Add a comment..."/>
                                </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        ))}
            <Box>
            <Row
            minHeight={44}
            justifyContent="space-between"
            alignItems="center"
            height="30px"
            py="5px"
            px="10px"
            borderBottom="1px solid #DBDBDB"
        >
            <span className="imgHome"></span>
            <span className="imgBusca"></span>
            <span className="imgAdd"></span>
            <span className="imgLike"></span>
            <span className="imgPerfil"></span>
        </Row>
            </Box>
        </Box>
    );
   
};
  