import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum OrderStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  SHIPPED = 'shipped',
  CANCELLED = 'cancelled',
}

@Entity({ name: 'order' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  @Index()
  id: string;

  @Column('uuid')
  itemId: string;

  @Column('uuid')
  userId: string; // ID of the user who placed the order

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount: number; // Total amount for the order

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  status: OrderStatus; // Enum for order status

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
