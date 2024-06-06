import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ClimateService } from 'src/domain/climate/service/climate.service';
import Climate from 'src/domain/climate/entity/climate';
import { ApiTags, ApiCreatedResponse, ApiBadRequestResponse, ApiOperation} from '@nestjs/swagger';
import { BadRequestResponse } from '../exceptions/bad-request.response';
import { CreateClimateDto } from './dtos/create-climate.dto';
import { PageOptionsDto } from '../shared/paginate-options.dto';
import { ApiPaginatedResponse } from 'src/decorators/pagination.decorator';
import { ClimateResponseDto } from './dtos/response-climate.dto';
import { PaginatedOutputDto } from '../shared/paginate-response.dto';
import { mapTo } from '../../utils/map-to';


@Controller('climate')
@ApiTags('climate')
export class ClimateController {
  constructor(private readonly climateService: ClimateService) { }

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

  @Get()
  @ApiPaginatedResponse(ClimateResponseDto)
  async getAll(
    @Query() paginateOptions: PageOptionsDto,
  ): Promise<PaginatedOutputDto<ClimateResponseDto>> {
    const result = await this.climateService.findAll(paginateOptions);
    const response: PaginatedOutputDto<ClimateResponseDto> = {
      data: result.items.map((item) => mapTo(item as any, ClimateResponseDto)),
      meta: {
        page: result.page,
        totalItems: result.totalItems,
        totalPages: result.totalPages,
        itemCount: result.itemCount,
        prev: result.prev,
        next: result.next,
      },
    };
    return response;
  }
}