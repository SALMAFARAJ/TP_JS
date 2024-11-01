// Enumération pour le statut du livre
enum BookStatus { 
    Read = "Read",
    Reread = "Re-read",
    DNF = "DNF",
    CurrentlyReading = "Currently reading",
    ReturnedUnread = "Returned Unread",
    WantToRead = "Want to read"
}

// Enumération pour le format du livre
enum BookFormat {
    Print = "Print",
    PDF = "PDF",
    Ebook = "Ebook",
    Audiobook = "Audiobook"
}

// Classe représentant un livre
class Book {
    title: string;          // Titre du livre
    author: string;         // Auteur du livre
    pages: number;         // Nombre total de pages
    pagesRead: number;     // Nombre de pages lues
    status: BookStatus;     // Statut du livre
    format: BookFormat;     // Format du livre
    suggestedBy: string;    // Suggéré par
    finished: boolean;      // Indique si le livre est fini ou non

    // Constructeur pour initialiser un livre
    constructor(
        title: string, 
        author: string, 
        pages: number, 
        format: BookFormat, 
        suggestedBy: string
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.pagesRead = 0; // Initialisation des pages lues à 0
        this.status = BookStatus.WantToRead; // Statut par défaut
        this.format = format; // Format du livre
        this.suggestedBy = suggestedBy; // Personne qui a suggéré le livre
        this.finished = false; // Livre non fini par défaut
    }

    // Méthode pour mettre à jour le nombre de pages lues
    currentlyAt(pagesRead: number): void {
        this.pagesRead = pagesRead;
        if (this.pagesRead >= this.pages) { // Si toutes les pages sont lues
            this.finished = true; // Marquer comme fini
            this.pagesRead = this.pages; // Ne pas dépasser le total
            this.status = BookStatus.Read; // Mettre à jour le statut
        }
    }

    // Méthode pour supprimer le livre (actuellement juste un log)
    deleteBook(): void {
        console.log(`${this.title} by ${this.author} has been deleted.`);
    }
}

// Exporter la classe et les enums
export { Book, BookStatus, BookFormat };
