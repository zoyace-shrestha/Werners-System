using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using mobile_app_messaging_module.DataModels;
using System.Net;

public class aruizContext : DbContext
{
    public aruizContext(DbContextOptions<aruizContext> options) : base(options) { }

    public DbSet<Annoucement> Announcements { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Annoucement>(entity =>
        {
            entity.ToTable("Announcements");

            entity.Property(e => e.idAnnoucements)
                .IsRequired()
                .HasColumnName("idAnnouncements")
                .HasColumnType("int(11)");

            entity.Property(e => e.title)
                .HasColumnName("title")
                .HasMaxLength(50);

            entity.Property(e => e.description)
                .HasColumnName("description")
                .HasMaxLength(300);

            entity.Property(e => e.type)
                .HasColumnName("type")
                .HasMaxLength(45);

            entity.Property(e => e.link)
                .HasColumnName("link")
                .HasMaxLength(45);

            entity.Property(e => e.background)
                .HasColumnName("background")
                .HasMaxLength(45);

            entity.Property(e => e.publishDate)
                .HasColumnName("publishDate")
                .HasColumnType("date");

            entity.Property(e => e.expirationDate)
                .HasColumnName("expirationDate")
                .HasColumnType("date");
        });
    }
}