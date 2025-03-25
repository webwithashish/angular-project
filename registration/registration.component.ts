import { Component } from '@angular/core';
import { NgForm, } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  onSubmit(form: NgForm) {
    
  }

  previewUrl: any;
  isDragging = false;

  constructor(private sanitizer: DomSanitizer) { }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    this.processFile(file);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    const file = event.dataTransfer?.files[0];
    if (file) this.processFile(file);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  private processFile(file: File) {
    if (!file.type.match('image.*')) {
      alert('Only image files are allowed!');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.previewUrl = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
    };
  }
}
