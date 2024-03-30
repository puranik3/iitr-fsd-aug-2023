import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons';

import ImageSource from '../models/ImageSource';
import getImageSource from '../services/about';

function About() {
    const [imgurls, setImgurls] = useState<ImageSource[]>([]);

    useEffect(
        () => {
            const fetchImages = async () => {

                try {
                    const data = await getImageSource()
                    setImgurls(data)
                }
                catch (error : any) {
                    alert(error.message)
                }
            }
            
            fetchImages();
        },[]);
        
    return (
        <main>
            <section>
                <header className="my-5">
                    <h2>
                        <FontAwesomeIcon icon={faCode} className="me-2" />
                        Tech Stack
                    </h2>
                    <hr />
                </header>
                <p>
                    This Application is developed using <a href="https://create-react-app.dev/docs/getting-started">Create React App</a>, and built using <a href="https://reactjs.org">React</a>, <a href="https://reactrouter.com/web/guides/quick-start">React Router</a>, and <a href="https://react-bootstrap.github.io/">React Bootstrap</a> (which in turn uses <a href="https://getbootstrap.com/">Bootstrap</a>). <a href="https://www.typescriptlang.org/docs/handbook/intro.html">Typescript</a> is the language of choice. The backend is built using <a href="https://github.com/typicode/json-server">json-server</a>. The icons used have been courtesy <a href="https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react">Font Awesome</a>.
                </p>
            </section>
            <section>
                <header>
                    <h2>
                        <FontAwesomeIcon icon={faLink} />
                        Attribution
                    </h2>
                </header>
                <p>
                    Below are the images taken from the internet for demonstration of the application.
                </p>
                <ListGroup>
                    {
                        imgurls.map (
                            (imgUrl) => (
                                <ListGroup.Item key={imgUrl}>
                                    <a href={imgUrl}>{imgUrl}</a>
                                </ListGroup.Item>
                            )
                        )
                    }
                </ListGroup>
            </section>
        </main>
    )
}

export default About;