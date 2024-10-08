import { HttpStatus, UseGuards, applyDecorators } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ApiResponse } from '../../../libs/open-api/decorators/api-response.decorator';
import { AuthError } from '../../../modules/auth/auth.common';
import { RefreshGuard } from '../guards/refresh.guard';

export const HasRefresh = () =>
  applyDecorators(
    ApiResponse(HttpStatus.UNAUTHORIZED),
    ApiResponse(HttpStatus.FORBIDDEN, AuthError.INVALID_TOKEN),
    ApiBearerAuth('JWT-auth'),
    UseGuards(RefreshGuard),
  );
