import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { pricingDetailsDto } from '../dto/pricingdetails-dto.dto';
import { pricingDetailsService } from '../services/pricingdetails.service';


@Controller('pricingDetails')
export class pricingDetailsController {
    constructor(private readonly pricingdetailsService: pricingDetailsService) { }

    @Post()
    async create(@Body() pricingdetailsDto: pricingDetailsDto) {
        const res = this.pricingdetailsService.create(pricingdetailsDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.pricingdetailsService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() pricingdetailsDto: pricingDetailsDto) {
        return this.pricingdetailsService.update(id, pricingdetailsDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.pricingdetailsService.delete(id);
    }
}