import { Injectable } from '@nestjs/common'
import { CreateItemInput } from './dto/create-item.input'
import { UpdateItemInput } from './dto/update-item.input'

@Injectable()
export class ItemService {
  create(createItemInput: CreateItemInput) {
    return 'This action adds a new item'
  }

  findAll() {
    return [{ exampleField: 23 }, { exampleField: 12 }]
  }

  findOne(id: number) {
    return { exampleField: id }
  }

  update(id: number, updateItemInput: UpdateItemInput) {
    return `This action updates a #${id} item`
  }

  remove(id: number) {
    return `This action removes a #${id} item`
  }
}
