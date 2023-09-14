export class Logger {
  constructor(private readonly context: string) {}

  info(message: string): void {
    console.log(`[${this.context}][INFO] ${message}`);
  }

  error(message: string): void {
    console.log(`[${this.context}][ERROR] ${message}`);
  }
  
}