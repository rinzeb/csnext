export class LeafletException {
  public name = 'LeafletException';

  constructor(public message: string) {
    this.message = message;
  }
}