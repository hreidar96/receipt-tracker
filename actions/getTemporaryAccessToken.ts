'use server'

import { currentUser } from "@clerk/nextjs/server";

import { SchematicClient } from "@schematichq/schematic-typescript-node";

const apiKey = process.env.SCHEMATIC_API_KEY;
const client = new SchematicClient(apiKey);

