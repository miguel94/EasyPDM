/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fr.upem.easypdm.entity;

import fr.upem.entity.easypdm.more.Maturity;
import java.sql.Timestamp;
import java.util.List;
import java.util.Set;
import static javax.persistence.CascadeType.ALL;
import static javax.persistence.CascadeType.REMOVE;
import javax.persistence.Entity;
import static javax.persistence.FetchType.LAZY;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import org.eclipse.persistence.annotations.CascadeOnDelete;

/**
 *
 * @author sybille
 */
@Entity
@NamedQueries({
    @NamedQuery(name = "Chapter.findByTome", query = "SELECT c FROM Chapter c WHERE c.tome = :tome")
})
public class Chapter extends Element { 
    
    private String title;
    
    @CascadeOnDelete
    @OneToMany(cascade=REMOVE, fetch = LAZY, mappedBy="chapter", orphanRemoval = true)
    private List<Paragraph> paragraphs;
    
    @ManyToOne
    @JoinColumn(name="tome_id", nullable=false)
    private Tome tome;

    public Chapter() {
    }

    public Chapter(String title, Tome tome, String name, String creator, String lastEditor, boolean lock, Timestamp editStamp, String path, Maturity maturity, Organisation organisation, Users userLockId) {
        super(name, creator, lastEditor, lock, editStamp, path, maturity, organisation, userLockId);
        this.title = title;
        this.tome = tome;
    }
    
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Tome getTome() {
        return tome;
    }

    public void setTome(Tome tome) {
        this.tome = tome;
    }
    
    public List<Paragraph> getParagraphs() {
        return paragraphs;
    }

    public void setParagraphs(List<Paragraph> paragraphs) {
        this.paragraphs = paragraphs;
    }

    
}
