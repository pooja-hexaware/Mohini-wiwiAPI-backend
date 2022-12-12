import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { storeDetailsDto } from '../dto/storedetails-dto.dto';
import { storeDetailsService } from '../services/storedetails.service';


@Controller('storeDetails')
export class storeDetailsController {
    constructor(private readonly storedetailsService: storeDetailsService) { }

    @Post()
    async create(@Body() storedetailsDto: storeDetailsDto) {
        const res = this.storedetailsService.create(storedetailsDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.storedetailsService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() storedetailsDto: storeDetailsDto) {
        return this.storedetailsService.update(id, storedetailsDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.storedetailsService.delete(id);
    }
}