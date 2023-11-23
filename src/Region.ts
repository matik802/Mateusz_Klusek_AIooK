import { Inject } from "@angular/core";

export class Region {
  private name: string;
  private dateArrival: Date;
  private dateReturn: Date;
  private tribeCount: number;
  private amazingItems: string[];
  private friendly: boolean;
  
  constructor(
    @Inject(String) name: string, 
    dateArrival: Date, 
    dateReturn: Date, 
    @Inject(Number) tribeCount: number,
    @Inject(String) amazingItems: string[],
    @Inject(Boolean)friendly: boolean) {
      this.name = name;
      this.dateArrival = dateArrival;
      this.dateReturn = dateReturn;
      this.tribeCount = tribeCount;
      this.amazingItems = amazingItems;
      this.friendly = friendly;
  }
  
    set Name(name: string) {
      this.name = name;
    }
    get Name(): string {
      return this.name;
    }
    set DateArrival(dateArrival: Date) {
      this.dateArrival = dateArrival;
    }
    get DateArrival(): Date {
      return this.dateArrival;
    }
    set DateReturn(dateReturn: Date) {
      this.dateReturn = dateReturn;
    }
    get DateReturn(): Date {
      return this.dateReturn;
    }
    set TribeCount(tribeCount: number) {
      this.tribeCount = tribeCount;
    }
    get TribeCount(): number {
      return this.tribeCount;
    }
    set AmazingItems(amazingItems: string[]) {
      this.amazingItems = amazingItems;
    }
    get AmazingItems(): string[] {
      return this.amazingItems;
    }
    set Friendly(friendly: boolean) {
      this.friendly = friendly;
    }
    get Friendly(): boolean {
      return this.friendly;
    }
  }
  