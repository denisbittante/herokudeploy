export class Assign {

  public id: number;
  public activityid: number;
  public resourceid: number;
  public resourcetype: number;
  public assigntype: number;
  public created: number;


  constructor(id: number,
              activityid: number,
              resourceid: number,
              resourcetype: number,
              assigntype: number,
              created: number)
  {
    this.id = id;
    this.activityid = activityid;
    this.resourceid = resourceid;
    this.resourcetype = resourcetype;
    this.assigntype = assigntype;
    this.created = created;
  }

}
