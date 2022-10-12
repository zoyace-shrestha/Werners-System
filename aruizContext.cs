using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using mobile_app_messaging_module.DataModels;
using System.Net;

public class aruizContext : DbContext
{
    public aruizContext(DbContextOptions<aruizContext> options)
        : base(options)
    {
    }

    public DbSet<Annoucement> Announcements { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Annoucement>(entity =>
        {
            entity.ToTable("Announcements");

            entity.Property(e => e.announcementId)
                .HasColumnName("idAnnouncements")
                .HasColumnType("int(11)");

            entity.Property(e => e.Title)
                .HasColumnName("title")
                .HasMaxLength(50);

            entity.Property(e => e.Description)
                .HasColumnName("description")
                .HasMaxLength(300);

            entity.Property(e => e.Type)
                .HasColumnName("type")
                .HasMaxLength(45);

            entity.Property(e => e.Link)
                .HasColumnName("link")
                .HasMaxLength(45);

            entity.Property(e => e.Background)
                .HasColumnName("background")
                .HasMaxLength(45);

            entity.Property(e => e.PublishDate)
                .HasColumnName("publishDate")
                .HasColumnType("date");

            entity.Property(e => e.ExpirationDate)
                .HasColumnName("expirationDate")
                .HasColumnType("date");
        });
    }
}