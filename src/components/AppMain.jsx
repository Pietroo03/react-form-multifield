import { useState } from "react"
const articlesList = []

export default function AppMain() {

    const [articles, setArticle] = useState(articlesList)
    const [newTitle, setNewTitle] = useState('')
    const [newAuthor, setNewAuthor] = useState('')
    const [newYear, setNewYear] = useState('')
    const [editArticle, setEditArticle] = useState(null)

    function addArticle(e) {
        e.preventDefault(e)

        const newArticleData = {
            title: newTitle,
            author: newAuthor,
            year: newYear
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
        setNewAuthor('')
        setNewYear('')
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
        setNewAuthor(articleToEdit.author)
        setNewYear(articleToEdit.year)
        setEditArticle(articleIndex)

    }

    return (

        <main>

            <div className="container">
                <h2>Articles</h2>

                <form onSubmit={addArticle}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Titolo</label>

                        <div className="input-group mb-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Aggiungi Titolo"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                value={newTitle}
                                onChange={e => setNewTitle(e.target.value)} />

                            <button className="btn btn-primary" type="submit" id="button-addon2">Aggiungi Titolo</button>
                        </div>

                    </div>

                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Autore</label>

                        <div className="input-group mb-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Aggiungi Autore"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                value={newAuthor}
                                onChange={e => setNewAuthor(e.target.value)} />

                            <button className="btn btn-primary" type="submit" id="button-addon2">Aggiungi Autore</button>
                        </div>

                    </div>

                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Anno di Pubblicazione</label>

                        <div className="input-group mb-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Aggiungi Anno di Pubblicazione"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                value={newYear}
                                onChange={e => setNewYear(e.target.value)} />

                            <button className="btn btn-primary" type="submit" id="button-addon2">Aggiungi Anno</button>
                        </div>

                    </div>

                </form>

                <h2>Articles List</h2>
                <ul className="list-group">
                    {articles.map((article, index) =>
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <div>Titolo: <strong>{article.title}</strong></div>
                                <div>Autore: <strong>{article.author}</strong></div>
                                <div>Anno di Pubblicazione: <strong>{article.year}</strong></div>
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