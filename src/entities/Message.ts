import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

import Chat from './Chat';

@Entity()
class Message extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(type => Chat, chat => chat.messages)
  chat: Chat;

  @CreateDateColumn() createAt: string;
  @CreateDateColumn() updateAt: string;
}

export default Message;
