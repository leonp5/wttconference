import React from "react";

import { Heading } from "../components/Text";
import { ContentWrapper } from "../components/Container/ContentWrapper";
import { Table, Column, TableHeading, Time, Content } from "../components/Tables/ProgramTable";
import { InlineLink } from "../components/Navigation/NavLinks";

function Program() {
  return (
    <ContentWrapper>
      <Heading>Programm</Heading>
      <Table>
        <Column>
          <TableHeading>Freitag, 26.06</TableHeading>
          <Time>17 - 18 Uhr</Time>
          <Content>Ankunft, Anmeldung im Foyer</Content>
          <Time>18 - 19 Uhr</Time>
          <Content>
            Eröffnung mit Impuls. Vorstellung unserer Initiative und des Programms für das
            Wochenende
          </Content>
          <Time>19:30 - 21 Uhr</Time>
          <Content> Abendessen</Content>
          <Time>21 Uhr</Time>
          <Content>Get together & Kennenlernspiele</Content>
        </Column>
        <Column>
          <TableHeading>Samstag, 27.06</TableHeading>
          <Time>8:00 - 9:00 Uhr</Time>
          <Content> Frühstück</Content>
          <Time>9:00 - 10:00 Uhr</Time>
          <Content> Gemeinsamer Beginn</Content>
          <Time>10:15 - 12:15 Uhr</Time>
          <Content>
            <InlineLink to="/workshops">Workshops</InlineLink>{" "}
          </Content>
          <Time>12:30 - 14:30 Uhr</Time>
          <Content>Mittagessen & Mittagspause </Content>
          <Time>14:30 - 14:45 Uhr</Time>
          <Content>Get together, gemeinsamer Start in den Nachmittag </Content>
          <Time>15 Uhr</Time>
          <Content> Offene Workshops - Initiativzeit</Content>
          <Time>16:30 – 18 Uhr</Time>
          <Content>Vernetzung - Kaffeepause </Content>
          <Time>18:00 – 19:30 Uhr</Time>
          <Content> Abendessen</Content>
          <Time>19:30</Time>
          <Content>Get together & open space</Content>
        </Column>
        <Column>
          <TableHeading>Sonntag, 28.06</TableHeading>
          <Time>8:30 - 9:30 Uhr</Time>
          <Content>Frühstück</Content>
          <Time>9:45 - 10:00 Uhr</Time>
          <Content>Gemeinsamer Beginn</Content>
          <Time>10 - 12 Uhr</Time>
          <Content>Plenum - Was bleibt? Was wird?</Content>
          <Time>12 - 12:30 Uhr</Time>
          <Content>Arbeitsräume aufräumen</Content>
          <Time>13 - 14 Uhr</Time>
          <Content>Mittagspause</Content>
          <Time>14 Uhr</Time>
          <Content>Abreise</Content>
        </Column>
      </Table>
    </ContentWrapper>
  );
}

export default Program;
