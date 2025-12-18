/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[cpf]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "InvitationStatus" AS ENUM ('PENDENTE', 'ACEITO', 'RECUSADO');

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "birthdate" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "complement" TEXT,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "district" TEXT,
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "level" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "points" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "number" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "street" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "urlImage" TEXT,
ADD COLUMN     "zipCode" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Challenge" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "conclusionCriteria" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "rewards" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trail" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalRewards" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isHighlighted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Trail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrailChallenge" (
    "id" SERIAL NOT NULL,
    "trailId" INTEGER NOT NULL,
    "challengeId" INTEGER NOT NULL,
    "challengeOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrailChallenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrailParticipation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "trailId" INTEGER NOT NULL,
    "progress" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrailParticipation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompletedChallenge" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "challengeId" INTEGER NOT NULL,
    "trailId" INTEGER NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rewardsEarned" INTEGER NOT NULL,

    CONSTRAINT "CompletedChallenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrailInvitation" (
    "id" SERIAL NOT NULL,
    "trailId" INTEGER NOT NULL,
    "senderId" INTEGER NOT NULL,
    "inviteeId" INTEGER NOT NULL,
    "status" "InvitationStatus" NOT NULL DEFAULT 'PENDENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrailInvitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HighlightedDistrict" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "bonusScore" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "urlImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HighlightedDistrict_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventAgenda" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "category" TEXT NOT NULL,
    "urlImage" TEXT,
    "urlExternal" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "tags" TEXT[],
    "organizer" TEXT,
    "value" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventAgenda_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Challenge_theme_idx" ON "Challenge"("theme");

-- CreateIndex
CREATE INDEX "Challenge_isActive_idx" ON "Challenge"("isActive");

-- CreateIndex
CREATE INDEX "Trail_ownerId_idx" ON "Trail"("ownerId");

-- CreateIndex
CREATE INDEX "Trail_theme_idx" ON "Trail"("theme");

-- CreateIndex
CREATE INDEX "Trail_isActive_idx" ON "Trail"("isActive");

-- CreateIndex
CREATE INDEX "Trail_isHighlighted_idx" ON "Trail"("isHighlighted");

-- CreateIndex
CREATE INDEX "TrailChallenge_trailId_idx" ON "TrailChallenge"("trailId");

-- CreateIndex
CREATE INDEX "TrailChallenge_challengeId_idx" ON "TrailChallenge"("challengeId");

-- CreateIndex
CREATE UNIQUE INDEX "TrailChallenge_trailId_challengeId_key" ON "TrailChallenge"("trailId", "challengeId");

-- CreateIndex
CREATE INDEX "TrailParticipation_userId_idx" ON "TrailParticipation"("userId");

-- CreateIndex
CREATE INDEX "TrailParticipation_trailId_idx" ON "TrailParticipation"("trailId");

-- CreateIndex
CREATE UNIQUE INDEX "TrailParticipation_userId_trailId_key" ON "TrailParticipation"("userId", "trailId");

-- CreateIndex
CREATE INDEX "CompletedChallenge_userId_idx" ON "CompletedChallenge"("userId");

-- CreateIndex
CREATE INDEX "CompletedChallenge_challengeId_idx" ON "CompletedChallenge"("challengeId");

-- CreateIndex
CREATE INDEX "CompletedChallenge_trailId_idx" ON "CompletedChallenge"("trailId");

-- CreateIndex
CREATE UNIQUE INDEX "CompletedChallenge_userId_challengeId_trailId_key" ON "CompletedChallenge"("userId", "challengeId", "trailId");

-- CreateIndex
CREATE INDEX "TrailInvitation_inviteeId_status_idx" ON "TrailInvitation"("inviteeId", "status");

-- CreateIndex
CREATE INDEX "TrailInvitation_trailId_idx" ON "TrailInvitation"("trailId");

-- CreateIndex
CREATE UNIQUE INDEX "TrailInvitation_trailId_inviteeId_key" ON "TrailInvitation"("trailId", "inviteeId");

-- CreateIndex
CREATE INDEX "HighlightedDistrict_isActive_idx" ON "HighlightedDistrict"("isActive");

-- CreateIndex
CREATE INDEX "HighlightedDistrict_name_idx" ON "HighlightedDistrict"("name");

-- CreateIndex
CREATE INDEX "EventAgenda_eventDate_idx" ON "EventAgenda"("eventDate");

-- CreateIndex
CREATE INDEX "EventAgenda_category_idx" ON "EventAgenda"("category");

-- CreateIndex
CREATE INDEX "EventAgenda_isActive_idx" ON "EventAgenda"("isActive");

-- CreateIndex
CREATE INDEX "EventAgenda_isFeatured_idx" ON "EventAgenda"("isFeatured");

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_cpf_idx" ON "User"("cpf");

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailChallenge" ADD CONSTRAINT "TrailChallenge_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailChallenge" ADD CONSTRAINT "TrailChallenge_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailParticipation" ADD CONSTRAINT "TrailParticipation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailParticipation" ADD CONSTRAINT "TrailParticipation_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedChallenge" ADD CONSTRAINT "CompletedChallenge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedChallenge" ADD CONSTRAINT "CompletedChallenge_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedChallenge" ADD CONSTRAINT "CompletedChallenge_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailInvitation" ADD CONSTRAINT "TrailInvitation_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailInvitation" ADD CONSTRAINT "TrailInvitation_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailInvitation" ADD CONSTRAINT "TrailInvitation_inviteeId_fkey" FOREIGN KEY ("inviteeId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
