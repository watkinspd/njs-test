import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/createcat.dto';

@Controller('cats')
export class CatsController {
    @Get()
    findall(): string {
        return 'Returns all cats';
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }
}
