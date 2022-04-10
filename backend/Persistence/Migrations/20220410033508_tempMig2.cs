using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    public partial class tempMig2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<Guid>(
                name: "Id",
                table: "Producto",
                type: "RAW(16)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "NUMBER(10)")
                .OldAnnotation("Oracle:Identity", "START WITH 1 INCREMENT BY 1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Producto",
                type: "NUMBER(10)",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "RAW(16)")
                .Annotation("Oracle:Identity", "START WITH 1 INCREMENT BY 1");
        }
    }
}
