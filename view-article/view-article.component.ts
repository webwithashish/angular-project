import { Component } from '@angular/core';

@Component({
  selector: 'app-view-article',
  standalone: false,
  templateUrl: './view-article.component.html',
  styleUrl: './view-article.component.css'
})
export class ViewArticleComponent {
  article = {
    title: 'The Future of AI in Healthcare',
    subheading: 'How artificial intelligence is revolutionizing patient care',
    authorName: 'Dr. Sarah Chen',
    content: `Artificial intelligence is transforming healthcare in unprecedented ways... [article content continues]`
  };
}
