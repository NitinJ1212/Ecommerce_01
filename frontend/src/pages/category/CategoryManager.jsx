import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [subFormData, setSubFormData] = useState({ name: '' });

  // API base URL - adjust according to your backend
  const API_BASE = '/category';

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_BASE);
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      alert('Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategoryById = async (id) => {
    try {
      const response = await axios.get(`${API_BASE}/${id}`);
      setSelectedCategory(response.data);
      fetchSubcategories(id);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  const fetchSubcategories = async (categoryId) => {
    try {
      const response = await axios.get(`${API_BASE}/${categoryId}`);
      setSubcategories(response.data.subcategories || []);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingCategory) {
        await axios.put(`${API_BASE}/${editingCategory._id}`, formData);
      } else {
        await axios.post(API_BASE, formData);
      }
      setShowModal(false);
      setFormData({ name: '', description: '' });
      setEditingCategory(null);
      fetchCategories();
    } catch (error) {
      console.error('Error saving category:', error);
      alert('Failed to save category');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;
    try {
      await axios.delete(`${API_BASE}/${id}`);
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
      alert('Failed to delete category');
    }
  };

  const handleSubcategorySubmit = async (e) => {
    e.preventDefault();
    if (!selectedCategory) return;
    try {
      await axios.post(`${API_BASE}/${selectedCategory._id}/subcategories`, subFormData);
      setSubFormData({ name: '' });
      fetchSubcategories(selectedCategory._id);
    } catch (error) {
      console.error('Error creating subcategory:', error);
      alert('Failed to create subcategory');
    }
  };

  const handleDeleteSubcategory = async (subId) => {
    if (!selectedCategory || !window.confirm('Are you sure you want to delete this subcategory?')) return;
    try {
      await axios.delete(`${API_BASE}/${selectedCategory._id}/subcategories/${subId}`);
      fetchSubcategories(selectedCategory._id);
    } catch (error) {
      console.error('Error deleting subcategory:', error);
      alert('Failed to delete subcategory');
    }
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h3 mb-0">Category Management</h2>
            <button 
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              <i className="bi bi-plus-circle me-2"></i>Add Category
            </button>
          </div>
        </div>
      </div>

      {/* Categories List */}
      <div className="row">
        <div className="col-lg-8">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="card shadow-sm">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Subcategories</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category) => (
                        <tr key={category._id}>
                          <td className="fw-semibold">{category.name}</td>
                          <td>{category.description || '-'}</td>
                          <td>
                            <span className="badge bg-info">
                              {category.subcategories?.length || 0}
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="btn-group btn-group-sm" role="group">
                              <button 
                                className="btn btn-outline-primary"
                                onClick={() => {
                                  setEditingCategory(category);
                                  setFormData({ name: category.name, description: category.description || '' });
                                  setShowModal(true);
                                }}
                                title="Edit"
                              >
                                <i className="bi bi-pencil"></i>
                              </button>
                              <button 
                                className="btn btn-outline-danger"
                                onClick={() => handleDeleteCategory(category._id)}
                                title="Delete"
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                              <button 
                                className="btn btn-outline-secondary"
                                onClick={() => fetchCategoryById(category._id)}
                                title="View Subcategories"
                              >
                                <i className="bi bi-eye"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Subcategories Panel */}
        <div className="col-lg-4">
          {selectedCategory && (
            <div className="card shadow-sm h-100">
              <div className="card-header bg-primary text-white">
                <h6 className="mb-0">
                  <i className="bi bi-folder me-2"></i>
                  {selectedCategory.name} Subcategories
                </h6>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubcategorySubmit} className="mb-4">
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="New subcategory name"
                      value={subFormData.name}
                      onChange={(e) => setSubFormData({ name: e.target.value })}
                      required
                    />
                    <button type="submit" className="btn btn-success">
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>
                </form>
                
                <div className="list-group list-group-flush" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {subcategories.map((sub) => (
                    <div key={sub._id} className="list-group-item d-flex justify-content-between align-items-center">
                      <span>{sub.name}</span>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteSubcategory(sub._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  ))}
                  {subcategories.length === 0 && (
                    <div className="text-muted text-center py-3">No subcategories</div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Category Modal */}
      {showModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingCategory ? 'Edit Category' : 'Add New Category'}
                </h5>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={() => {
                    setShowModal(false);
                    setEditingCategory(null);
                    setFormData({ name: '', description: '' });
                  }}
                />
              </div>
              <form onSubmit={handleCreateOrUpdate}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowModal(false);
                      setEditingCategory(null);
                      setFormData({ name: '', description: '' });
                    }}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Saving...
                      </>
                    ) : (
                      editingCategory ? 'Update' : 'Create'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManager;
