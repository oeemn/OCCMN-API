import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionsService {
	constructor(private readonly prisma: PrismaService) {}

	create(createPermissionDto: CreatePermissionDto) {
		return this.prisma.permission.create({
			data: createPermissionDto
		})
	}

	findAll() {
		return this.prisma.permission.findMany()
	}

	findOne(id: string) {
		return this.prisma.permission.findUnique({
			where: {
				id
			}
		})
	}

	update(id: string, updatePermissionDto: UpdatePermissionDto) {
		return this.prisma.permission.update({
			where: { id },
			data: updatePermissionDto
		})
	}

	remove(id: string) {
		return this.prisma.permission.delete({
			where: { id }
		})
	}
}
