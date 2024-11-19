import { useState } from "react"
const articlesList = []

export default function AppMain() {

    const [articles, setArticle] = useState(articlesList)
    const [newTitle, setNewTitle] = useState('')
    const [newImage, setNewImage] = useState('')
    const [newContent, setNewContent] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [editArticle, setEditArticle] = useState(null)

    function addArticle(e) {
        e.preventDefault(e)

        const newArticleData = {
            title: newTitle,
            image: newImage,
            content: newContent,
            category: newCategory
        }

        // if statement per le condizioni dell'edit

        //se editArticle è settato su null, vuolo dire che non sto modificando qualcosa, ma lo sto aggiungendo
        if (editArticle != null) {
            const updatedArticles = [...articles]
            console.log(updatedArticles);
            updatedArticles[editArticle] = newArticleData
            setArticle(updatedArticles)
            setEditArticle(null)

        } else {

            setArticle([
                ...articles,
                newArticleData
            ])

        }

        setNewTitle('')
        setNewImage('')
        setNewContent('')
        setNewCategory('')
    }

    function handleRemove(e) {
        const removeArticle = Number(e.target.getAttribute('data-index'))
        console.log(removeArticle);

        const articlesListUpdate = articles.filter((article, index) => index != removeArticle)

        setArticle(articlesListUpdate)

    }

    function handleEdit(e) {

        // recupero il data-index dell'articolo che voglio modificare
        const articleIndex = Number(e.target.getAttribute('data-index'))
        console.log(articleIndex);

        // articleIndex corrisponderà alla posizione dell'oggetto, nell'array articles, che voglio modificare
        const articleToEdit = articles[articleIndex]
        console.log(articleToEdit);

        setNewTitle(articleToEdit.title)
        setNewImage(articleToEdit.image)
        setNewContent(articleToEdit.content)
        setNewCategory(articleToEdit.category)
        setEditArticle(articleIndex)

    }

    return (

        <main>

            <div className="container">
                <h2>Articles</h2>

                <form onSubmit={addArticle}>
                    <div className="mb-3 input-titolo">
                        <label htmlFor="title" className="form-label">Titolo</label>

                        <div className="input-group mb-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Aggiungi Titolo"
                                aria-label="Recipient's title"
                                aria-describedby="button-addon2"
                                value={newTitle}
                                onChange={e => setNewTitle(e.target.value)} />
                        </div>

                    </div>

                    <div className="mb-3 input-immagine">
                        <label htmlFor="image" className="form-label">Immagine</label>

                        <div className="input-group mb-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Aggiungi link Immagine"
                                aria-label="Recipient's image"
                                aria-describedby="button-addon2"
                                value={newImage}
                                onChange={e => setNewImage(e.target.value)} />
                        </div>

                    </div>

                    <div className="mb-3 input-contenuto">
                        <label htmlFor="content" className="form-label">Aggiungi Contenuto</label>

                        <div className="input-group mb-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Aggiungi Contenuto"
                                aria-label="Recipient's content"
                                aria-describedby="button-addon2"
                                value={newContent}
                                onChange={e => setNewContent(e.target.value)} />
                        </div>

                    </div>

                    <div className="mb-3 input-categoria">
                        <label htmlFor="category" className="form-label">Categoria</label>
                        <select id="inputState"
                            className="form-select"
                            value={newCategory}
                            onChange={e => setNewCategory(e.target.value)}>
                            <option>Formativo</option>
                            <option>Dibattito</option>
                            <option>Ludico</option>
                            <option>Q&A</option>
                            <option>LETSGOSKI</option>
                        </select>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-primary" type="submit" id="button-addon2">Aggiungi Post</button>
                    </div>


                </form>

                <h2>Articles List</h2>
                <ul className="list-group">
                    {articles.map((article, index) =>
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <div><strong>{article.title}</strong></div>
                                <div>{article.image}</div>
                                <div>{article.content}</div>
                                <div><strong>Categoria: </strong>{article.category}</div>

                            </div>

                            <div>
                                <button onClick={handleEdit} data-index={index} className="btn btn-success me-2">Modifica</button>
                                <button onClick={handleRemove} data-index={index} className="btn btn-danger">Rimuovi</button>
                            </div>
                        </li>

                    )}
                </ul>

            </div>

        </main>

    )

}