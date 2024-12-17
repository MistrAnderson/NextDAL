class  Operation {
  Operate(val1: string, val2: string): Object | undefined {
    if (isNaN(Number(val1)) || isNaN(Number(val2))) {
      console.log("in method true");
      return { "message": "Error, params must be numbers only" }
    }
  }
}

export class Add extends Operation {
  Operate(val1: string, val2: string): Object {
    const err = super.Operate(val1, val2);
    if (err) {return err};

    const result = +val1 + +val2;
    
    console.log(isNaN(Number(val2)));

    return { "message": result };
  } 
}

export class Sub extends Operation {
  Operate(val1: string, val2: string): Object {
    const err = super.Operate(val1, val2);
    if (err) {return err};

    const result = +val1 - +val2;

    return { "message": result };
  } 
}

export class Mult extends Operation {
  Operate(val1: string, val2: string): Object {
    const err = super.Operate(val1, val2);
    if (err) {return err};

    const result = +val1 * +val2;

    return { "message": result };
  } 
}

export class Div extends Operation {
  Operate(val1: string, val2: string): Object {
    const err = super.Operate(val1, val2);
    if (err) {return err};

    if (val2 === "0") {
      return { "message": "Error, can't devide by zero" };
    }

    const result = +val1 / +val2;

    return { "message": result };
  } 
}


