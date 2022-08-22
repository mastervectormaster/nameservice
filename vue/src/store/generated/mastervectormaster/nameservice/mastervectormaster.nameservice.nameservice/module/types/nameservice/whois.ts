/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "mastervectormaster.nameservice.nameservice";

export interface Whois {
  index: string;
  name: string;
  value: string;
  price: string;
  owner: string;
}

const baseWhois: object = {
  index: "",
  name: "",
  value: "",
  price: "",
  owner: "",
};

export const Whois = {
  encode(message: Whois, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Whois {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWhois } as Whois;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        case 5:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Whois {
    const message = { ...baseWhois } as Whois;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: Whois): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    message.price !== undefined && (obj.price = message.price);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<Whois>): Whois {
    const message = { ...baseWhois } as Whois;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
