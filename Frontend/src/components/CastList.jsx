import { Row, Col, Flex } from "antd"

export function CastList({credits}){
    if (!credits || !credits.cast) {
        return null;
    }
    return(
        <Row className="px-4 pb-7 ">
            <Col md={24}>
                <h1 className="py-3 text-xl font-bold">Reparto Principal</h1>
            </Col>
            <Col md={24}>
                <Flex className="overflow-x-scroll pb-2">
                    {credits.cast?.map((actor, index) => (
                        index < 20 ?
                        <Flex key={actor.id} className="w-36 min-h-64 bg-white rounded-lg my-2 ml-2 mr-1 pb-2 shadow-lg" vertical>
                            {
                                actor.profile_path !== null ?
                                <img
                                className="rounded object-cover profile_picture"
                                src={`https://image.tmdb.org/t/p/w138_and_h175_face/${actor.profile_path}`}
                                alt={actor.name}
                                />
                                :
                                <div className="profile_default">

                                </div>
                            }
                            <div className="px-2 pt-2">
                                <span className="text-base font-bold">{actor.name}</span>
                                <p className="text-xs">{actor.character}</p>
                            </div>
                        </Flex>
                        :
                        null
                    ))}
                </Flex>
            </Col>
        </Row>  
    )
}

/*
  <div className="overflow-x-scroll flex gap-4">
                    {credits.cast?.map(actor => (
                        <div key={actor.id} className="flex flex-col items-start bg-white rounded-lg  shadow-md  ">
                            <img
                                className="h-44 mb-2 rounded object-cover"
                                src={`https://image.tmdb.org/t/p/w138_and_h175_face/${actor.profile_path}`}
                                alt={actor.name}
                            />
                            <div className="px-2">
                                <span className="text-base font-bold">{actor.name}</span>
                                <p className="text-xs">{actor.character}</p>
                            </div>
                        </div>
                    ))}
                </div>
*/