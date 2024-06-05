import { Controller, Post, Body } from '@nestjs/common';
import { ClimateService } from 'src/domain/climate/service/climate.service';
import Climate from 'src/domain/climate/entity/climate';
import { ApiTags, ApiCreatedResponse, ApiBadRequestResponse, ApiOperation} from '@nestjs/swagger';
import { BadRequestResponse } from '../exceptions/bad-request.response';
import { CreateClimateDto } from './dtos/create-climate.dto';

@Controller('climate')
@ApiTags('climate')
export class ClimateController {
  constructor(private readonly climateService: ClimateService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Created Succesfully',
    type: [Climate],
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad Request',
    type: BadRequestResponse,
  })
  @ApiOperation({ summary: 'Creates a new Announcement' })
  async createClimate(@Body() body: CreateClimateDto): Promise<Climate> {
    const { city, stateCode, countryCode, zip } = body;
    return this.climateService.createClimate(city, stateCode, countryCode, zip);
  }
}