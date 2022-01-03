import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-querry.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor( private readonly coffeeService: CoffeesService){}
   @Get()
    findAll(@Query()paginationQuerry: PaginationQueryDto){
        // const{ limit, offset} = paginationQuerry;
        return this.coffeeService.findAll(paginationQuerry);
        
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        console.log( typeof id)
        return this.coffeeService.findOne('' + id)
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        console.log(createCoffeeDto instanceof CreateCoffeeDto)
    return  this.coffeeService.create(createCoffeeDto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateCoffeeDto:UpdateCoffeeDto){
        return this.coffeeService.update(id, UpdateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.coffeeService.remove(id)
    }


}
