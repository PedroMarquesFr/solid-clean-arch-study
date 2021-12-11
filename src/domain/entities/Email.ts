interface IAddress {
  email: string;
  name: string;
}

export class Email {
  public to: IAddress;
  public from: IAddress;
  public subject: string;
  public body: string;

  constructor(props: Email) {
    function validate(to: IAddress, from: IAddress): void {
      if (to.email === from.email) {
        throw new Error("Remetende e destinatario tem o mesmo email");
      }
    }
    validate(props.to, props.from);
    Object.assign(this, props);
  }
}
