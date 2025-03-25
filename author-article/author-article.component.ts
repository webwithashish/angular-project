import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-author-article',
  standalone: false,
  templateUrl: './author-article.component.html',
  styleUrl: './author-article.component.css'
})
export class AuthorArticleComponent {
  categories = ['Technology', 'Sports', 'Business', 'Health', 'Entertainment'];
  submitted = false;

  onSubmit(articleForm: NgForm) {
    if (articleForm.valid) {
      this.submitted = true;
      console.log('Article Submitted:', articleForm.value);
      // Send to your backend service
      articleForm.resetForm();
    }
  }
}
