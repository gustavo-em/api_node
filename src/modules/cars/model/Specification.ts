import { v4 as uuidv4} from 'uuid'

class Specifications {
  id?: string;
  name: string;
  description: string;
  create_at: Date

  constructor(){
      if(!this.id){
        this.id = uuidv4()
      }
  }
}

export { Specifications }