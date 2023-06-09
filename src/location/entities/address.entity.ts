import { Column } from 'typeorm';

export class Address {
  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  streetAddress: string;
}
